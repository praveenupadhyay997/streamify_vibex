import React from "react";

const commentsData = [
    {
      name: "Aarav",
      text: "This is the first comment!",
      replies: [
        {
          name: "Vidya",
          text: "I agree with Aarav's comment!",
          replies: [
            {
              name: "Rohan",
              text: "Vidya, your agreement makes sense.",
              replies: [
                {
                  name: "Ananya",
                  text: "I have a different perspective on this.",
                  replies: [
                    {
                      name: "Arjun",
                      text: "Ananya, could you please elaborate on your perspective?",
                      replies: [
                        {
                          name: "Ishita",
                          text: "Arjun, I think your perspective is intriguing.",
                          replies: []
                        },
                      ],
                    },
                    {
                      name: "Meera",
                      text: "This is an interesting discussion!",
                      replies: [
                        {
                          name: "Rahul",
                          text: "Meera, what specifically caught your interest?",
                          replies: []
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "Ishaan",
              text: "I also agree with Aarav.",
              replies: [
                {
                  name: "Neha",
                  text: "Ishaan, what aspects of Aarav's comment do you find most compelling?",
                  replies: []
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Raj",
      text: "I have a question about the main topic.",
      replies: [
        {
          name: "Priya",
          text: "Raj, feel free to ask your question, and we'll try to help!",
          replies: [
            {
              name: "Karan",
              text: "I'm curious about the same topic!",
              replies: [
                {
                  name: "Sanjana",
                  text: "Karan, let's explore the topic together!",
                  replies: []
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Aishwarya",
      text: "Great points in the discussion!",
      replies: [
        {
          name: "Aryan",
          text: "Aishwarya, which specific points stood out to you?",
          replies: []
        },
        {
          name: "Tanvi",
          text: "I agree, Aishwarya! This conversation is enriching.",
          replies: []
        },
      ],
    },
    {
      name: "Vikram",
      text: "I'm new here. What's the main topic?",
      replies: [
        {
          name: "Neha",
          text: "Welcome, Vikram! We're discussing various topics. Feel free to join in!",
          replies: [
            {
              name: "Arnav",
              text: "I'm also new. Nice to meet you, Vikram!",
              replies: [
                {
                  name: "Sneha",
                  text: "Arnav and Vikram, welcome to the discussion! Excited to have new voices.",
                  replies: []
                },
              ],
            },
            {
              name: "Pooja",
              text: "Hello, everyone! Excited to be a part of this discussion.",
              replies: [
                {
                  name: "Ravi",
                  text: "Pooja, what topics are you most interested in exploring here?",
                  replies: []
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Aditya",
      text: "I find the diverse perspectives here fascinating!",
      replies: [
        {
          name: "Kritika",
          text: "Aditya, it indeed adds depth to our discussions.",
          replies: [
            {
              name: "Varun",
              text: "Kritika, any particular perspective that left a lasting impression on you?",
              replies: []
            },
          ],
        },
      ],
    },
    {
      name: "Nina",
      text: "Is there a specific format we follow for discussions here?",
      replies: [
        {
          name: "Sahil",
          text: "Nina, discussions are generally free-flowing. Feel free to share your thoughts!",
          replies: []
        },
        {
          name: "Riya",
          text: "Sahil, sometimes we have themed discussions. Would you be interested in suggesting a theme?",
          replies: []
        },
      ],
    },
  ];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user_icon"
        src="https://www.svgrepo.com/show/350417/user-circle.svg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList key={index} comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="w-[1380px] m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
