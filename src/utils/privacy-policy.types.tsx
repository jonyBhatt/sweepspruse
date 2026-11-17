interface PolicySection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

export const policySections: PolicySection[] = [
  {
    id: "information-we-collect",
    number: "01",
    title: "Information We Collect",
    content: (
      <div className="space-y-3">
        <p>
          We only collect the information necessary to estimate, schedule, and
          complete your property maintenance or cleaning service. Depending on
          how you interact with Sweep Spruse, this includes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              Contact & Identity Details:
            </strong>{" "}
            Your full name, email address, and phone number submitted through
            our Quote Wizard or Free Consultation form.
          </li>
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              Property & Service Specifications:
            </strong>{" "}
            Your street address, city or neighborhood, driveway/lawn size tier,
            apartment bedroom count, cleaning intensity, and preferred service
            date or time window.
          </li>
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              Property Access Instructions:
            </strong>{" "}
            Optional gate codes, lockbox details, or parking notes you provide
            so our crews can complete services while you are away.
          </li>
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              Uploaded Photos (Junk Removal):
            </strong>{" "}
            Images you optionally attach when requesting a custom hand-carried
            Junk Removal estimate.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "how-we-use-information",
    number: "02",
    title: "How We Use Your Information",
    content: (
      <div className="space-y-3">
        <p>
          Your information is used strictly to deliver and coordinate the
          services you request:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Calculating accurate quotes, seasonal contract eligibility, and
            applicable promotional discounts.
          </li>
          <li>
            Dispatching hand-operated crews for Snow Clearing (including
            automatic dispatch when snowfall exceeds 1.5 inches under Seasonal
            Contracts), Apartment Cleaning, Junk Removal, and Grass Mowing.
          </li>
          <li>
            Responding to Free Consultation inquiries within one business day.
          </li>
          <li>
            Sending booking confirmations, arrival updates, and custom
            estimates.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "photos-and-whatsapp",
    number: "03",
    title: "Uploaded Photos & WhatsApp Quote Dispatch",
    content: (
      <div className="space-y-3">
        <p>
          To keep quotes fast and transparent, our Quote Wizard integrates two
          specific workflows:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              Junk Removal Photos:
            </strong>{" "}
            Photos uploaded in Step 2 of the Quote Wizard are used solely by our
            team to verify that items can be safely carried by hand and to
            prepare an accurate price estimate. We never publish or share
            photos of your property publicly.
          </li>
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              WhatsApp Click-to-Chat:
            </strong>{" "}
            When you submit a quote request, your summary is formatted into a
            direct WhatsApp message (<code className="font-mono text-xs bg-[#EBECE4] px-1.5 py-0.5 rounded">wa.me</code>)
            so you can send your booking details directly to our dispatch team.
            Messages sent through WhatsApp are also subject to WhatsApp's
            end-to-end encryption and privacy terms.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "data-storage-security",
    number: "04",
    title: "Data Storage, Access Codes & Security",
    content: (
      <div className="space-y-3">
        <p>
          We treat property access instructions (such as lockbox codes or entry
          notes) with strict confidentiality. Access notes are shared only with
          the assigned crew for your scheduled visit and are never sold, rented,
          or disclosed to third-party marketers.
        </p>
        <p>
          Administrative access to quote queues and lead records is restricted
          to authorized Sweep Spruse personnel protected by authenticated,
          time-limited sessions.
        </p>
      </div>
    ),
  },
  {
    id: "your-privacy-rights",
    number: "05",
    title: "Your Choices & Privacy Rights",
    content: (
      <div className="space-y-3">
        <p>You remain in control of your personal information at all times:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              Access & Correction:
            </strong>{" "}
            You may request a copy of the quote or consultation details we hold
            for you, or ask us to update your contact or address records.
          </li>
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              Deletion:
            </strong>{" "}
            You may ask us to delete your inquiry history, uploaded photos, or
            saved property access notes once your service is complete.
          </li>
          <li>
            <strong className="font-semibold text-[#1A2E22]">
              No Marketing Spam:
            </strong>{" "}
            We do not sell your email or phone number to third-party ad
            networks.
          </li>
        </ul>
      </div>
    ),
  },
];