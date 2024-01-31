export const categoryList = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Valentines",
  "Love Songs",
  "M S Dhoni",
];

const GOOGLE_API_KEY = "AIzaSyAhGL4HXNkI58biNZ7zAcIul9An8UPpsRU";
export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${GOOGLE_API_KEY}`;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const commentsData = [
  {
    name: "Alice",
    text: "This is the first comment!",
    replies: [
      {
        name: "Bob",
        text: "I agree with Alice's comment.",
        replies: [
          {
            name: "Charlie",
            text: "Bob, your agreement makes sense.",
            replies: [
              {
                name: "David",
                text: "I have a different perspective on this.",
                replies: [
                  {
                    name: "Eva",
                    text: "David, could you please elaborate on your perspective?",
                  },
                  {
                    name: "Frank",
                    text: "This is an interesting discussion!",
                  },
                ],
              },
            ],
          },
          {
            name: "Grace",
            text: "I also agree with Alice.",
            replies: []
          },
        ],
      },
    ],
  },
  {
    name: "John",
    text: "I have a question about the main topic.",
    replies: [
      {
        name: "Kelly",
        text: "John, feel free to ask your question, and we'll try to help!",
        replies: [
          {
            name: "Ian",
            text: "I'm curious about the same topic!",
            replies: []
          },
        ],
      },
    ],
  },
  {
    name: "Olivia",
    text: "Great points in the discussion!",
    replies: []
  },
  {
    name: "Mike",
    text: "I'm new here. What's the main topic?",
    replies: [
      {
        name: "Nancy",
        text: "Welcome, Mike! We're discussing various topics. Feel free to join in!",
        replies: [
          {
            name: "Paul",
            text: "I'm also new. Nice to meet you, Mike!",
            replies: []
          },
          {
            name: "Quinn",
            text: "Hello, everyone! Excited to be a part of this discussion.",
            replies: []
          },
        ],
      },
    ],
  },
];
