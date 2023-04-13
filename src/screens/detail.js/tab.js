import React from "react";

function Tab() {
  return (
    <div class="tab">
      <button class="tablinks" onclick="openCity(event, 'London')">
        Season 1
      </button>
      <button class="tablinks" onclick="openCity(event, 'Paris')">
        Season 2
      </button>
      <button class="tablinks" onclick="openCity(event, 'Tokyo')">
        Season 3
      </button>
    </div>
  );
}

export default Tab;
