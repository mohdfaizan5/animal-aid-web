import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className=" flex flex-col justify-center items-center w-full">
      <Accordion className="w-[600px]" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Why is animal cruelty a concern?</AccordionTrigger>
          <AccordionContent>
            All animal cruelty is a concern because it is wrong to inflict
            suffering on any living creature. Intentional cruelty is a
            particular concern because it is a sign of psychological distress
            and often indicates that an individual either has already
            experienced violence or may be predisposed to committing acts of
            violence.
          </AccordionContent>
        </AccordionItem>
        {/* <AccordionItem value="item-2">
          <AccordionTrigger>
          Is there any evidence of a connection between animal cruelty & human
            violence?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely. Many studies in psychology, sociology, and criminology
            during the last 25 years have demonstrated that violent offenders
            frequently have childhood and adolescent histories of serious and
            repeated animal cruelty. The FBI has recognized the connection since
            the 1970s, when its analysis of the lives of serial killers
            suggested that mos
          </AccordionContent>
        </AccordionItem> */}
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Why would anyone be cruel to animals?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How will my complaint be handled?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What should I do if I witness animal cruelty or neglect in my local
            area?
          </AccordionTrigger>
          <AccordionContent>
            less you feel comfortable and safe speaking to the animal owner
            directly about your concerns, you should contact the law enforcement
            agency where the action occurred. Law enforcement officers have the
            authority to investigate animal cruelty complaints, but their level
            of involvement will vary depending on the location and nature o{" "}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            What is the penalty for animal cruelty in New Hampshire?
          </AccordionTrigger>
          <AccordionContent>
            less you feel comfortable and safe speaking to the animal owner
            directly about your concerns, you should contact the law enforcement
            agency where the action occurred. Law enforcement officers have the
            authority to investigate animal cruelty complaints, but their level
            of involvement will vary depending on the location and nature o{" "}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;
