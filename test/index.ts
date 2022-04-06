import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers, waffle } from "hardhat";

describe("Contract", function () {
  it("NFT Voucher Test", async function () {
    const provider = waffle.provider;
    //const [minter] = await ethers.getSigners();
    const [minter, staff1, staff2, vip1, vip2, user1, fomotech] = provider.getWallets();
    const ipfsEndpoint = "https://mock-endpoint/metadata/"
    
    //계약 객체 생성
    const SaleForStaff = await ethers.getContractFactory("KApmNftVoucherSale");
    const SaleForVip = await ethers.getContractFactory("KApmNftVoucherSale");
    const APM = await ethers.getContractFactory("KApmCoin");
    const NFT = await ethers.getContractFactory("KApmNftVoucher");
    
    //KIP-7 APM 배포
    const apm = await APM.deploy()
    await apm.deployed()
    await apm.mint(minter.address, "10000000000000000000000");

    //KIP-37 바우처 배포
    const nft = await NFT.deploy("ipfsEndpoint");
    await nft.deployed();

    //임직원 세일 배포
    const saleForStaff = await SaleForStaff.deploy(
      apm.address,
      nft.address,
      fomotech.address,
      2,
      1000,
      "임직원 세일 제목",
      "임직원 세일 상세\n\n임직원 세일 상세 한줄더"
      );
    await saleForStaff.deployed();

    //VIP세일 배포
    const saleForVip = await SaleForVip.deploy(
      apm.address,
      nft.address,
      fomotech.address,
      2,
      1000,
      "VIP 세일 제목",
      "VIP 세일 상세\n\nVIP 세일 상세 한줄더"
      );
    await saleForVip.deployed();

    console.log(nft.address)
    //오픈 이벤트 바우처 생성
    let createTx = await nft.create(2, 0, ipfsEndpoint);
    await createTx.wait();

    //바우처 디테일 설정
    let setVoucherTx = await nft.setVoucherDetail(
      2, //token id
      "apM Open Event Voucher",
      "apM Members 서비스 오픈 기념 NFT Voucher\n\nWrapped by FOMO Tech",
      2,
      1653922800, //22.05.31 UTC0
      true
      ); 
    await setVoucherTx.wait();

      
    //세일 계약에 민터 권한 설정

    console.log(await nft.isMinter(saleForStaff.address))
    await nft.addMinter(saleForStaff.address);
    await nft.addMinter(saleForVip.address);
    console.log(await nft.isMinter(saleForStaff.address))
    
    //화이트리스트 등록
    await saleForStaff.addWhitelist([minter.address, staff1.address, staff2.address]);
    await saleForVip.addWhitelist([vip1.address, vip2.address]);
    console.log("----")
    expect(await nft.balanceOf(minter.address, 2)).to.be.equal(0);
    let apmPerNft = await saleForStaff.apmPerNft();
    let buyAmount = 3;

    console.log("어프로브전:" + await apm.allowance(minter.address, saleForStaff.address));
    //민터 계약의 어프로브 수행
    await apm.approve(saleForStaff.address, "115792089237316195423570985008687907853269984665640564039457584007913129639935");
    console.log("어프로브후:" + await apm.allowance(minter.address, saleForStaff.address));
    let buyTx = await saleForStaff.buy(buyAmount, apmPerNft.mul(buyAmount));
    await buyTx.wait();
    console.log("8")
    expect(await nft.balanceOf(minter.address, 2)).to.be.equal(buyAmount);

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
