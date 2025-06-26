import React from "react";
import AnimationContainer from "@/components/global/animation-container";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
const EnterprisePage = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="h-[13rem] lg:h-[15rem] lg:w-[100rem] hidden md:flex items-center justify-center">
        <TextHoverEffect text="FutureFlow" />
      </div>
      <div className="py-20">
      <AnimationContainer delay={0.1}>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
          Enterprise
        </h1>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          Get in touch with us to learn more about our enterprise solutions.
        </p>
      </AnimationContainer>
      </div>
    </div>
  );
};

export default EnterprisePage;
