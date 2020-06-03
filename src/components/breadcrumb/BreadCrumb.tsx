import React from "react";
import { Breadcrumb } from "semantic-ui-react";
interface BreadcrumbProps {
  sections: {
    key: string;
    content: string;
    link?: boolean;
    active?: boolean;
  }[];
}
const breadcrumb = (props: BreadcrumbProps) => {
  return <Breadcrumb icon="right angle" sections={props.sections} />;
};
export default breadcrumb;
