const fs = require('fs');

const subagentData = [
  {
    "name": "Sabiha Anjum",
    "text": "",
    "ownerReply": "🙏🏻 thnku so much for your valuable review.comw visit again"
  },
  {
    "name": "Mir Syeda",
    "text": "",
    "ownerReply": "Thanku for your kind words, Mir Syeda! 🤩 We're thrilled to hear that you had an amazing experience at our Beauty Parlour. Your satisfaction is our top priority, and your 5-star rating means the world to us. 🤩 We look forward to serving you again soon. Warm Regards, Team Glam Beauty Studio."
  },
  {
    "name": "Nazia Arif",
    "text": "Services\nHaircut, Manicure, Shampoo & conditioning, Hair threading, Wedding and event preparation, Blow dry, Make-up, Make-up services, Hairstyling, Eyebrow threading, Pedicure, Waxing, Spa services, Facials, Lash perms",
    "ownerReply": ""
  },
  {
    "name": "Sonam Perveen",
    "text": "",
    "ownerReply": "Thnku dear 🙏🏻"
  },
  {
    "name": "Syed Zafar",
    "text": "",
    "ownerReply": "Thanku so much dear"
  },
  {
    "name": "Noor Saba",
    "text": "",
    "ownerReply": "Thnku dear ✨ 💫"
  },
  {
    "name": "Rani Kumari",
    "text": "",
    "ownerReply": "Thanku so much Rani Kumari ji! We are thrilled to hear that you had a 5-star experience at Glam Beauty Studio. 🤩 🌟 We appreciate your kind words and recommendation. Looking forward to pamper you again soon! Warm Regards, Team Glam Beauty Studio."
  },
  {
    "name": "azmi md imtiyaz khan",
    "text": "",
    "ownerReply": "Thanku azmi md imtiyaz khan! We're thrilled to hear that you had a great experience at our beauty parlour. 🤩 🌟 We will continue to provide the highest quality services and ensure your satisfaction. Warm Regards, Team Glam Beauty Studio."
  },
  {
    "name": "Nagma Khan",
    "text": "",
    "ownerReply": "Thanku Nagma Khan 🤩 We're thrilled to hear that you had a positive experience at our Beauty Parlour! 🌟 It's our top priority to provide exceptional service and make our clients feel pampered. Your feedback means the world to us! If there's anything else we can do for you, please let us know. Warm Regards, Team Glam Beauty Studio."
  },
  {
    "name": "Adeeba Moin",
    "text": "",
    "ownerReply": "Dear Adeeba Moin ji, Thanku so much for your 5⭐ review! We're thrilled to hear that you had a wonderful experience at Glam Beauty Studio 💖 Keep shining and we can't wait to see you again! Warm Regards, Team Glam Beauty Studio."
  },
  {
    "name": "Simranjeet Kaur",
    "text": "",
    "ownerReply": "Thanku so much dear"
  },
  {
    "name": "Md Danish",
    "text": "",
    "ownerReply": "Thanku so much for your kind words, Md Danish ji! 🤩 We're thrilled to know that you had a great experience at our Beauty Parlour. 👍 ✨ Your satisfaction is our priority, and we look forward to serving you again soon. Warm Regards, Team Glam Beauty Studio."
  },
  {
    "name": "Rafique Ahmed",
    "text": "",
    "ownerReply": "Thnku bhabhi ✨ ✨ 💫"
  },
  {
    "name": "Saiqua Naaz",
    "text": "",
    "ownerReply": ""
  },
  {
    "name": "Priyanshi Singh",
    "text": "",
    "ownerReply": "Thnku dear 🙏🏻"
  }
];

let content = fs.readFileSync('src/components/TestimonialCarousel.jsx', 'utf8');

// For any testimonial that currently has the generic "Highly recommended!" text, we update it.
// If subagentData has a text for them, we use it, otherwise empty string.

let matchCount = 0;

// The current text is "Highly recommended! Excellent service at Glam Beauty Studio."
const genericText = "Highly recommended! Excellent service at Glam Beauty Studio.";

const result = content.replace(/name:\s*"([^"]+)",\s*service:\s*"Client",\s*text:\s*"Highly recommended! Excellent service at Glam Beauty Studio."/g, (match, name) => {
    // find in subagentData
    const found = subagentData.find(item => item.name.trim().toLowerCase() === name.trim().toLowerCase());
    let newText = "";
    if (found && found.text && found.text !== "More" && !found.text.includes("₹800")) {
        newText = found.text;
    }
    matchCount++;
    return `name: "${name}",\n        service: "Client",\n        text: "${newText.replace(/\n/g, ' ')}"`
});

fs.writeFileSync('src/components/TestimonialCarousel.jsx', result, 'utf8');
console.log(`Replaced generic texts. Matches: ${matchCount}`);
