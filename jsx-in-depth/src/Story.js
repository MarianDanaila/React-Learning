import React from "react";

function PhotoStory() {
  return <h1>PhotoStory</h1>;
}

function VideoStory() {
  return <h1>VideoStory</h1>;
}

const components = {
  photo: PhotoStory,
  video: VideoStory,
};

function Story(props) {
  const SpecificStory = components[props.storyType];
  return <SpecificStory />;
}

export default Story;
