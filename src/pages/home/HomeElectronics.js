import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import CategoryOneSlider from "../../wrappers/category/CategoryOneSlider";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductThree from "../../wrappers/product/TabProductThree";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";

const HomeElectronics = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Eco | Electronics Home</title>
        <meta
          name="description"
          content="Electronics home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutTwo>
        {/* hero slider */}
        <HeroSliderThree />

        {/* category slider */}
        <CategoryOneSlider spaceBottomClass="pb-95" />

        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass="pb-90" />

        {/* tab product */}
        <TabProductThree spaceBottomClass="pb-60" category="electronics" />

        {/* banner */}

        {/* testimonial */}

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />

        {/* blog featured */}
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeElectronics;
