import Link from "next/link";
import React from "react";

const Footnote = () => {
  return (
    <div className="mx-auto max-w-[980px] border-b-[1px] border-[#d2d2d7]  pt-[17px] pb-[11px]">
      <ul>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          <small>*</small> New subscribers only. $10.99/month after trial. Offer
          available for a limited time to new subscribers who connect an
          eligible device to an Apple device running iOS 15 or iPadOS 15 or
          later. Offer good for 3 months after eligible device pairing. No audio
          product purchase necessary for current owners of eligible devices.
          Plan automatically renews until cancelled. Restrictions and other
          <span className="hover:underline"> terms</span> apply.
        </li>
      </ul>
      <ul>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          <small>◊◊</small>
          <span className="font-medium text-[#424245]">
            The following purchases with Apple Card are ineligible to earn 5%
            back: monthly financing through Apple Card Monthly Installments,
            Apple iPhone Payments, the iPhone Upgrade Program, and wireless
            carrier financing plans;
            <Link href="/">Apple Media Services</Link>; AppleCare+ monthly
            payments.{" "}
          </span>{" "}
          Subject to credit approval. Valid only on qualifying purchases in U.S.
          for new Apple Card customers who open an account and use it from
          12/1/22 to 12/25/22 at Apple Store locations,
          <Link href="/">apple.com</Link> , the Apple Store app, or by calling
          1-800-MY-APPLE. Accounts opened before 12/1/22 or after 12/25/22 do
          not qualify. New Apple Card users added to an Apple Card Family
          account opened during offer period can earn 5% back on their own
          purchases. For Apple Card Family co-owners and participants, bonus
          Daily Cash will be disbursed within 7 days of your qualifying
          purchase. Not valid for existing Apple Card users who merge their
          Apple Card accounts to become Co-Owners. 5% is total amount of Daily
          Cash that can be earned for qualifying Apple purchases using Apple
          Card. Returning qualified items that were purchased during offer
          period may impact your cash back. 5% savings is earned as Daily Cash
          and transferred to your Apple Cash card when transactions post to your
          Apple Card account. If you do not have an Apple Cash card, Daily Cash
          can be applied by you as a credit on your statement balance. See the
          <Link href="/">Apple&nbsp;Card Customer Agreement</Link> for more
          details on Daily Cash and qualifying transactions. Changes to your
          account status during offer period may delay the fulfillment of your
          Daily Cash bonus.
        </li>
      </ul>
      <ol className="list-decimal px-[17px]">
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          Requires an iCloud account and a compatible Apple device running the
          latest operating system software.
        </li>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          Compatible hardware and software required. Works with compatible
          content in supported apps. Not all content available in Dolby Atmos.
          iPhone with TrueDepth camera required to create a personal profile for
          Spatial Audio, which will sync across Apple devices running the latest
          operating system software, including iOS, iPadOS (coming later this
          fall), macOS (coming later this fall), and tvOS.
        </li>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          Works with iPhone 8 or later and iPod touch (7th generation) with the
          latest version of iOS; 12.9-inch iPad Pro (2nd generation or later),
          11-inch iPad Pro, 10.5-inch iPad Pro, iPad (5th generation or later),
          iPad Air (3rd generation or later), and iPad mini (5th generation or
          later) with the latest version of iPadOS; and Apple TV 4K with the
          latest version of tvOS.
        </li>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          AirPods (3rd generation) and AirPods Pro (2nd generation) are sweat
          and water resistant for non-water sports and exercise, and they are
          IPX4 rated. Sweat and water resistance are not permanent conditions.
        </li>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          MagSafe charging requires a compatible MagSafe charger. Wireless
          charging requires a Qi-certified wireless charger. AirPods Pro (2nd
          generation) charging case also works with the Apple Watch charger or
          Lightning connector.
        </li>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          Battery life depends on device settings, environment, usage, and many
          other factors.
        </li>
      </ol>
      <ul>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings &gt; General
          &gt; Software Update. Tap Download and Install.
        </li>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          Available for qualifying applicants in the United States.
        </li>
        <li className="pb-[9.6px] text-[12px] text-[#6e6e73]">
          Apple&nbsp;Card is issued by Goldman Sachs Bank USA, Salt Lake City
          Branch.
        </li>
      </ul>
    </div>
  );
};

export default Footnote;
