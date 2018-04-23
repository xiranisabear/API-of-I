$(document).ready(function () {
    $('.cd-timeline__read-more').click(function () {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function () {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('Read More');
            } else {
                toggle_switch.html('Read Less');
            }
        });
    });

});





var frequency = [201610, 201611, 201612, 201701, 201702, 201703, 201704,
  201705, 201706, 201707, 201708, 201709
];
var chatTimes = [11, 16, 18, 17, 11, 19, 22, 20, 19, 22, 27, 21];
var FightTimes = [1, 0, 0, 0, 0, 0, 0, 1, 1, 3, 0, 0];
var VideoChatTimes = [0, 4, 3, 7, 5, 7, 3, 5, 3, 0, 0, 7];


new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: frequency,
    datasets: [{
        // fontColor: "white",
        data: chatTimes,
        label: "ChatTimes",
        backgroundColor: "#80deea",
        borderColor: "#80deea",
        fill: false
      },

      {
        data: FightTimes,
        label: "FightTimes",
        borderColor: "#985855",
        backgroundColor: "#985855",
        fill: false
      },

      {
        data: VideoChatTimes,
        label: "VideoChatTimes",
        borderColor: "#dfafbf",
        backgroundColor: "#dfafbf",
        fill: false
      },


    ]
  },
  options: {
    title: {
      display: true,
      fontColor: '#f8f7fd',
      text: 'Chatting History with Mom (from October, 2016 to September, 2017)'
    },
    legend: {
      labels: {
        fontColor: '#f8f7fd'
      },
      data: {
        fontColor: '#f8f7fd'
      }

    }
  }
});

new Chart(document.getElementById("pie-chart1"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [7, 4]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart2"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [11, 5]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart3"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [10, 8]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart4"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [7, 10]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart5"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [4, 7]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart6"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [8, 11]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart7"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [13, 9]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart8"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [11, 9]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart9"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [13, 6]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart10"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [20, 2]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart11"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [20, 7]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});
new Chart(document.getElementById("pie-chart12"), {
  type: 'pie',
  data: {
    labels: ["Mom Contacts Me", "I Contact Mom"],
    datasets: [{
      label: "Who initializes the conversation?",
      backgroundColor: ["#dfafbf", "#80deea"],
      data: [14, 7]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Who initializes the conversation?'
    }
  }
});

(function() {
  function VerticalTimeline(element) {
    this.element = element;
    this.blocks = this.element.getElementsByClassName("js-cd-block");
    this.images = this.element.getElementsByClassName("js-cd-img");
    this.contents = this.element.getElementsByClassName("js-cd-content");
    this.offset = 0.8;
    this.hideBlocks();
  };

  VerticalTimeline.prototype.hideBlocks = function() {
    //hide timeline blocks which are outside the viewport
    if (!"classList" in document.documentElement) {
      return;
    }
    var self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function(i) {
        if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
          self.images[i].classList.add("cd-is-hidden");
          self.contents[i].classList.add("cd-is-hidden");
        }
      })(i);
    }
  };

  VerticalTimeline.prototype.showBlocks = function() {
    if (!"classList" in document.documentElement) {
      return;
    }
    var self = this;
    for (var i = 0; i < this.blocks.length; i++) {
      (function(i) {
        if (self.contents[i].classList.contains("cd-is-hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
          // add bounce-in animation
          self.images[i].classList.add("cd-timeline__img--bounce-in");
          self.contents[i].classList.add("cd-timeline__content--bounce-in");
          self.images[i].classList.remove("cd-is-hidden");
          self.contents[i].classList.remove("cd-is-hidden");
        }
      })(i);
    }
  };

  var verticalTimelines = document.getElementsByClassName("js-cd-timeline"),
    verticalTimelinesArray = [],
    scrolling = false;
  if (verticalTimelines.length > 0) {
    for (var i = 0; i < verticalTimelines.length; i++) {
      (function(i) {
        verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
      })(i);
    }

    //show timeline blocks on scrolling
    window.addEventListener("scroll", function(event) {
      if (!scrolling) {
        scrolling = true;
        (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250): window.requestAnimationFrame(checkTimelineScroll);
      }
    });
  }

  function checkTimelineScroll() {
    verticalTimelinesArray.forEach(function(timeline) {
      timeline.showBlocks();
    });
    scrolling = false;
  };
})();
