import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./props/Button";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const Faqsection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "How does AI security automation work?",
      answer:
        "Our AI security automation uses machine learning algorithms to continuously monitor your systems, detect anomalies, and respond to threats in real-time without human intervention.",
    },
    {
      id: 2,
      question: "What types of threats can it detect?",
      answer:
        "The system can detect various threats including malware, phishing attempts, unauthorized access, data breaches, DDoS attacks, and other suspicious activities across your network.",
    },
    {
      id: 3,
      question: "Is my data secure with your service?",
      answer:
        "Yes, we use end-to-end encryption, follow industry best practices, and are compliant with major security standards like ISO 27001, SOC 2, and GDPR to ensure your data remains protected.",
    },
    {
      id: 4,
      question: "How long does implementation take?",
      answer:
        "Implementation typically takes 2-4 weeks depending on your infrastructure complexity. Our team provides full support during setup and ensures smooth integration with your existing systems.",
    },
    {
      id: 5,
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 technical support, dedicated account management, regular security updates, training sessions, and comprehensive documentation to help you get the most out of our service.",
    },
  ];

  return (
    <div className="relative px-4 text-textColor dark:text-white py-[75px] overflow-y-hidden">
      <div className="max-w-[1488px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-[100px]">
          {/* text */}
          <div className="w-full flex flex-col items-center justify-center md:block md:flex-1">
            <h1 className="text-center font-redhawk text-[24px] leading-[100%] tracking-[-1%] md:hidden">
              Frequently asked questions
            </h1>
            <div className="hidden md:block font-redhawk text-[48px] leading-[65px] tracking-[-4%]">
              <h1>Frequently</h1>
              <h1>asked</h1>
              <h1>questions</h1>
            </div>
            <p className="text-[16px] md:text-[20px] leading-[150%] md:leading-[100%] tracking-[2%] mt-[20px] text-textColor/70 dark:text-white/70 text-center md:text-left max-w-[350px] md:max-w-[516px]">
              Answers to the questions we hear most about automated AI security.
            </p>
            <div className="w-fit mt-5">
              <Button name="Contact Us" image="arrow-up.png" />
            </div>
          </div>

          {/* faq */}
          <div className="w-full md:flex-1">
            <div className="flex flex-col gap-y-[24px] max-w-[779px]">
              {faqData.map((faq) => {
                const isHovered = hoveredItem === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    className="border border-textColor/34 dark:border-white/34 rounded-[8px] py-[20px] px-[24px] w-full cursor-pointer overflow-hidden"
                    onMouseEnter={() => setHoveredItem(faq.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    layout
                  >
                    {/* question */}
                    <div className="flex items-center justify-between">
                      <h1 className="font-medium text-[16px] md:text-[20px] leading-[150%] tracking-[2%]">
                        {faq.question}
                      </h1>

                      {/* Plus/X Icon */}
                      <motion.div
                        className="w-6 h-6 flex items-center justify-center"
                        animate={{ rotate: isHovered ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-textColor dark:text-white"
                        >
                          <path
                            d="M12 5V19M5 12H19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                    </div>

                    {/* Answer */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-[16px] md:text-[18px] leading-[150%] tracking-[2%] mt-[16px] text-textColor/70 dark:text-white/70">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqsection;
