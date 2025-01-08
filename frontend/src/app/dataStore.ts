// src/app/dataStore.ts
export interface Reply {
    id: string;
    author: string;
    content: string;
    createdAt: string;
  }
  
  export interface Thread {
    id: string;
    title: string;
    author: string;
    content: string;
    createdAt: string;
    replies: Reply[];
  }
  
  // Very naive store
  let threads: Thread[] = [
    {
      id: "1",
      title: "Welcome Thread",
      author: "Anonymous",
      content: "Hello all! This is the first thread.",
      createdAt: new Date().toISOString(),
      replies: [],
    },
  ];
  
  export function getThreads() {
    return threads;
  }
  
  export function getThreadById(id: string) {
    return threads.find((t) => t.id === id);
  }
  
  export function addThread(title: string, author: string, content: string) {
    const newThread: Thread = {
      id: (threads.length + 1).toString(),
      title,
      author: author || "Anonymous",
      content,
      createdAt: new Date().toISOString(),
      replies: [],
    };
    threads.push(newThread);
    return newThread;
  }
  
  export function addReply(threadId: string, author: string, content: string) {
    const thread = getThreadById(threadId);
    if (!thread) return null;
  
    const newReply: Reply = {
      id: (thread.replies.length + 1).toString(),
      author: author || "Anonymous",
      content,
      createdAt: new Date().toISOString(),
    };
    thread.replies.push(newReply);
    return newReply;
  }


// Thread 1
addThread(
  "Is water wet?",
  "Anonymous",
  "Serious question, is water wet or does it just make things wet? Let's debate."
);

addReply("2", "Anonymous", "Water isn't wet. It makes things wet. You're welcome.");
addReply("2", "Anonymous", "OP is a brainlet. Water is obviously wet, next question.");
addReply("2", "Anonymous", "Mods pls delete this low-quality bait thread.");

// Thread 2
addThread(
  "What's the best way to cook a steak?",
  "Anonymous",
  "Do I reverse sear, or is that just a meme? Asking for my next BBQ."
);

addReply("3", "Anonymous", "Reverse sear is the way to go. Perfect crust every time.");
addReply("3", "Anonymous", "Grill it like a real man. Reverse sear is for soyboys.");
addReply("3", "Anonymous", "Microwave it. Trust me, bro.");

// Thread 3
addThread(
  "Aliens exist. Prove me wrong.",
  "Anonymous",
  "With how big the universe is, aliens *must* exist. Change my mind."
);

addReply("4", "Anonymous", "OP, do you even think? The Fermi Paradox is a thing.");
addReply("4", "Anonymous", "Aliens are already here. They just don't want to talk to us.");
addReply("4", "Anonymous", "You're the alien. Go back to Mars.");

// Thread 4
addThread(
  "Why are keyboards QWERTY?",
  "Anonymous",
  "Seriously, who thought QWERTY was a good layout? Discuss."
);

addReply("5", "Anonymous", "It was designed to slow you down so typewriters wouldn't jam.");
addReply("5", "Anonymous", "OP clearly doesn't know about Dvorak. Educate yourself.");
addReply("5", "Anonymous", "Just use a gaming keyboard and remap everything, lol.");
  