import React from "react";

function Timeline(props) {
  return (
    <div>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">
        {props.timeline.map((timeline) => (
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {timeline.date}
            </time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {timeline.title}
            </h3>
            <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {timeline.description}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
