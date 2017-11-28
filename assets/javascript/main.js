jQuery(document).ready(function($) {


    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    new GitHubCalendar("#github-graph", "GarethW1994");


    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    new GitHubActivity.feed({ username: "GarethW1994", selector: "#ghfeed" });


});
