import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers, waffle } from "hardhat";

describe("Contract", function () {
  it("WL 판매 테스트", async function () {
    const provider = waffle.provider;
    
    const [owner, wl1, wl2, fomotech] = provider.getWallets();
    const ipfsEndpoint = "https://mock-endpoint/metadata/"
    
    //--- 초기화 시작 ----
    //계약 객체 생성
    const SaleForWL = await ethers.getContractFactory("KApmNftVoucherLimitSale");
    const APM = await ethers.getContractFactory("KApmCoin");
    const NFT = await ethers.getContractFactory("KApmNftVoucher");
    
    //KIP-7 APM 배포
    const apm = await APM.deploy()
    await apm.deployed()

    //WL 주소로 APM 지급
    await apm.mint(wl1.address, "10000000000000000000000000");

    //KIP-37 NFT 바우처 배포
    const nft = await NFT.deploy("ipfsEndpoint");
    await nft.deployed();

    //--- 초기화 종료 ----
    //--- 세일 테스트 시작 ---

    const TEST_NFT_VOUCHER_ID = 15; //Dev서버 화리 테스트용 상품권

    //WL판매용 바우처 생성 (컨트렉트 레벨에서는 Event, 전자 타입을 구분하지 않는다.)
    let createVoucherTypeTx = await nft.create(
      TEST_NFT_VOUCHER_ID, 
      10000, //초기발행량
      ipfsEndpoint
      );
    await createVoucherTypeTx.wait();

    //WL 판매용 바우처 디테일 설정
    let updateVoucherDetailTx = await nft.setVoucherDetail(
      TEST_NFT_VOUCHER_ID,
      "apM Members NFT e-Voucher",
      "apM Members NFT e-Vouchers can be 'Unwrapped' to the apM Event e-Voucher on the FOMO Tech web through apM Members App.\n\n\n\n"
       + "Expiration Date : 5 years.\n\n"
       + "Transfer and refunds are not possible after Unwrapping",
      TEST_NFT_VOUCHER_ID, 
      1830265199, //Fri Dec 31 2027 23:59:59 GMT+0900
      true
      ); 
    await updateVoucherDetailTx.wait();

    //화이트리스트 세일 배포 
    const saleForWL = await SaleForWL.deploy(
      apm.address,
      nft.address,
      fomotech.address,
      TEST_NFT_VOUCHER_ID,
      10000,
      "Whitelist sale of NFT e-Voucher.",
      "Individual purchase limit may be granted through offline KYC, please contact fomotech@apm-coin.com\n\nIt is possible to swap to the apM Event e-Voucher with a validity period of 5 years on the FOMO Tech page in apM Members. Gifts and refunds are not possible after swap.\n\nWrapped by FOMO Tech"
      );
    await saleForWL.deployed();

  



    //세일 계약이 민터 권한이 없는지 확인
    expect(await nft.isMinter(saleForVip.address)).to.be.equal(false);

    //세일 계약에 민터 권한 설정
    await nft.addMinter(saleForVip.address);

    //세일 계약에 민터 권한이 있는지 확인
    expect(await nft.isMinter(saleForVip.address)).to.be.equal(true);

    //vip가 가진 NFT가 없는지 확인
    expect(await nft.balanceOf(vip.address, 2)).to.be.equal(0);
    let apmPerNft = await saleForVip.apmPerNft();
    let buyAmount = 10001;

    //vip유저가 vip세일 계약에 토큰 어프로브 수행
    await apm.connect(vip).approve(saleForVip.address, "115792089237316195423570985008687907853269984665640564039457584007913129639935");
 
    //vip유저가 세일 시작 전 구매 시도
    await expect(saleForVip.connect(vip).buy(buyAmount, apmPerNft.mul(buyAmount))).to.be.revertedWith("It's not on sale.");

    //오너가 세일 시작
    await saleForVip.setStep(1);

    //오너가 화이트리스트 사용 설정
    await saleForVip.setUsingWhitelist(true);

    //vip유저가 화이트리스트 아님 예외
    await expect(saleForVip.connect(vip).buy(buyAmount, apmPerNft.mul(buyAmount))).to.be.revertedWith("It's not on the whitelist.");

    //오너가 화이트리스트 사용 해제 설정
    await saleForVip.setUsingWhitelist(false);
    //await saleForVip.addWhitelist([vip1.address, vip2.address]);

    //vip유저가 지갑별 구매한도 초과
    await expect(saleForVip.connect(vip).buy(buyAmount, apmPerNft.mul(buyAmount))).to.be.revertedWith("Buy limit exceeded");

    //오너가 vip유저의 구매한도설정
    await saleForVip.setBuyLimitPerAddress([vip.address],[20000]);

    //vip유저는 전체 구매한도 초과
    await expect(saleForVip.connect(vip).buy(buyAmount, apmPerNft.mul(buyAmount))).to.be.revertedWith("Sales NFT is insufficient.");

    console.log("salecount 1:" + await saleForVip.saleCount());
    await saleForVip.connect(vip).buy(buyAmount, apmPerNft.mul(buyAmount));
    await nft.connect(vip).redeemVoucher(2, buyAmount, "test-uuid");

    console.log("salecount2:" + await saleForVip.saleCount());
    await saleForVip.connect(vip).buyAndRedeem(buyAmount, apmPerNft.mul(buyAmount), "test-uuid");
    await expect(saleForVip.connect(vip).buyAndRedeem(1, apmPerNft, "testuuid2")).to.be.revertedWith("It's not on sale.");
    expect(await saleForVip.step()).to.be.equal(2);


    //await expect(nft.mint(minter.address, 0)).to.be.revertedWith("Mint limit exceeded");

    //세일리미트 설정 전 구매시도
    //expect(await saleForStaff.buy(tbuyAmount, apmPerNft.mul(buyAmount)).to.be.revertedWith("There is no sale NFT"));

 
    //await saleForStaff.buy(buyAmount, apmPerNft.mul(buyAmount));
    //await expect(saleForStaff.buy(buyAmount, apmPerNft.mul(buyAmount)).to.be.revertedWith("Sales NFT is insufficient."));

    //buyAmount = 2;
    //await saleForStaff.buy(buyAmount, apmPerNft.mul(buyAmount));

    //await buyTx.wait();
    //console.log("8")
    //expect(await nft.balanceOf(minter.address, 2)).to.be.equal(buyAmount);



/*

    //check mint
    expect(await nft.tokenURI(9999)).to.be.equal(ipfsEndpoint + "9999");
    await expect(nft.mint(minter.address, 0)).to.be.revertedWith("Mint limit exceeded");
    await expect(nft.tokenURI(10000)).to.be.revertedWith("KIP17Metadata: URI query for nonexistent token");

    //test batchTrasnfer
    for(let i = 1; i <= 50; i++){
      tokenIds.push(i);
    }
    const batchTransferTx = await nft.batchTransfer(user.address, tokenIds);
    await batchTransferTx.wait();

    expect(await nft.balanceOf(minter.address)).to.be.equal(9950);
    expect(await nft.balanceOf(user.address)).to.be.equal(50);

    //token#99 base uri index is 1
    expect(await nft.tokenURI(99)).to.be.equal(ipfsEndpoint + "99");
    const tokenUriTx = await nft.setTokenUriIndex(99, 1);
    await tokenUriTx.wait();
    expect(await nft.tokenURI(99)).to.be.equal("99");

    //set base uri index1 is https://google.com/
    const baseUriTx = await nft.setVariableBaseUri(1, "https://google.com/");
    await baseUriTx.wait();
    expect(await nft.tokenURI(99)).to.be.equal("https://google.com/" + "99");
    expect(await nft.tokenURI(98)).to.be.equal(ipfsEndpoint + "98");
*/
  });
});
