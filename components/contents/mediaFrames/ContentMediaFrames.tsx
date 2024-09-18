import React from "react";

const ContentMediaFrames = ({
  component,
}: {
  component: TContentMediaFrames;
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-40">
      {component.Media.length > 0 &&
        component.Media.map((item) => {
          return (
            <div key={item.id}>
              <div dangerouslySetInnerHTML={{ __html: item.iframe }} />
            </div>
          );
        })}
    </div>
  );
};

export default ContentMediaFrames;