import React from "react";

const Security = () => {
  return (
    <div className="bg-[#121212] h-fit w-full pt-2 lg:pt-8 md:pt-36 lg:mt-0 px-4 lg:px-24 lg:pb-12 text-white pb-20 md:pb-24 -mt-1">
      <h1 className="text-5xl text-white font-bold font-Rowdies">SECURITY</h1>
      <p className="text-2xl mt-8 text-white leading-9 ">
        Scammers may approach you in various ways to steal your valuable digital
        assets. Practice caution, follow the instructions below and keep your
        assets safe.
      </p>
      <ul className="text-[#9BA1A7] mt-8 text-lg">
        <li>
          &#9670; Always double or triple check the addresses of websites to
          which you connect your wallet containing valuable NFTs or crypto.
        </li>{" "}
        <li className="mt-6">
          &#9670; Do not rush to mint or claim anything with a wallet containing
          valuable NFTs or crypto.
        </li>{" "}
        <li className="mt-6">
          &#9670; Never sign a transaction on an untrusted website with a wallet
          containing valuable NFTs or crypto.
        </li>{" "}
        <li className="mt-6">
          &#9670; Never sign a message on an untrusted website with a wallet
          containing valuable NFTs or crypto.
        </li>{" "}
        <li className="mt-6">
          &#9670; Never reveal wallet’s seed phrase to anyone nor store it
          digitally.
        </li>{" "}
        <li className="mt-6">
          &#9670; Approach every social media message, links, e-mails,
          attachments with caution. Attachments may be malicious.
        </li>
      </ul>
      <p className="text-xl pt-4 text-white mt-4">
        For more information on security, you can explore websites like
        <a
          href="https://www.boringsecurity.com"
          className="font-bold text-[#2461FF] underline"
        >
          Boring Security
        </a>
        . Please note that our project is unrelated and not affiliated with
        Boring Security.
      </p>
    </div>
  );
};

export default Security;
