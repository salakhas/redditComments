const post = {
        id: "001",
    author: "albert",
    body: "Whats the status?",
    timestamp: "Sun Aug 02 2020 18:08:45 GMT+0530",
    points: "2",
    replies: [
    {
        id: "003",
        author: "haren",
        body: "Wrote the test suites, waiting for approval?",
        timestamp: "Sun Aug 02 2020 18:12:45 GMT+0530",
        points: "3",
        replies: [
        {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
            points: "8"
        }
        ]
    },
    {
        id: "002",
        author: "Nrupul",
        body: "looking forward for the demo!",
        timestamp: "Sun Aug 02 2020 18:10:45 GMT+0530",
        points: "2"
    }
    ]
};

function createComment(replies,parent){
    console.log(replies)
    if(replies === undefined){
        return
    }
    replies.forEach((c) => {
        const li = document.createElement("li");
        const firstComment = document.createElement("div");
        const smalls1 = document.createElement("small");
        
        

            let dateToday = new Date();
        let minOfToday = dateToday.getMinutes();
        let postStamp = post.timestamp;
        postStamp = postStamp.split(" ");
        
        let timeOfReply = postStamp[4];
        
        timeOfReply=timeOfReply.split(':');
        
        let replyTime = timeOfReply[1];
        
        let diffTime = Math.abs(minOfToday - replyTime);


        smalls1.textContent = `${c.author} ${c.points} points ${diffTime} minutes ago`;
        smalls1.setAttribute("class","text-dark")
        li.append(smalls1);

        const li1 = document.createElement("li");
        const temp = document.createElement("b");
        temp.textContent = c.body;
        li1.append(temp);

        const li2 = document.createElement("li");
        const smalls2 = document.createElement("small");
        smalls2.textContent=`Reply Give Award Share Report Save`;
        smalls2.setAttribute("class","text-dark")
        li2.append(smalls2);
        
        const ul = document.createElement("ul");

        li.style.listStyleType= "none";
        li1.style.listStyleType = "none";
        li2.style.listStyleType = "none";

        createComment(c.replies,ul)
        parent.append(li,li1,li2,ul);
       
        parent.setAttribute("class","second")
        
    })
}

function createPost(post){
    const container = document.createElement("div");
    const timestamp = document.createElement("div");
    const body = document.createElement("div");
    const body1 = document.createElement("b");
    const firstLine = document.createElement("div");
    const small1 = document.createElement("small");

    let today = new Date();
    console.log("today=>",today)
    let minToday = today.getMinutes();
    console.log("minutes today=>",minToday);
    
    
    let postTimestamp = post.timestamp;
    postTimestamp = postTimestamp.split(" ");
    console.log(postTimestamp)
    let timeOfComment = postTimestamp[4];
    console.log(timeOfComment)
    timeOfComment=timeOfComment.split(':');
    console.log("timestamp minutes=>",timeOfComment)
    let commentTime = timeOfComment[1];
    console.log("commentTime=>",commentTime)

    //getting the difference between current time and time of comment
    let diffTime = Math.abs(minToday - commentTime);
    console.log("diffTime=>",diffTime)

    body1.textContent = post.body;
    body.append(body1);
    small1.textContent = `${post.author} ${post.points} points ${diffTime} minutes ago`;
    small1.setAttribute("class","text-dark")
    firstLine.append(small1);
    let reply = document.createElement("button");
    reply.textContent = "reply"
    let bottomLine = document.createElement("div");
    let bottomLine1 = document.createElement("small");
    bottomLine1.textContent=`Reply Give Award Share Report Save`;
    bottomLine.append(bottomLine1)
    bottomLine.setAttribute("class","text-dark")

    const commentsContainer = document.createElement("ul");
   // commentsContainer.setAttribute("class","first");
    createComment(post.replies, commentsContainer);
    console.log(commentsContainer,post)
    container.append(firstLine,body,bottomLine,commentsContainer)
    container.setAttribute("class","comment w-50");
    return container;
}

const tree = createPost(post)
document.body.append(tree);