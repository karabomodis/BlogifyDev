
import React from "react";
import "./Blogs.css";

function Blogs({blogs}) {
  return (
    <div className="blogs-container">
      <h1>Developer Blogs</h1>
      <p>Browse public blogs shared by developers.</p>

      <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">DevUser</span>
          </div>
          <span className="post-date">Nov 8, 2025</span>
        </div>
        <div className="card-content"  >
          <h4>Title: Mastering React Router v7</h4>
          <h4>Subtitle: How to protect your routes and streamline user navigation in modern React apps.</h4>
          <h4>Content/Preview:</h4>
          <p >
            Today I learned about React Router v7 and how to implement protected
            routes for logged-in users. It's amazing how flexible routing can be!
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>
       
        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">SamsonDev</span>
          </div>

          <span className="post-date">Nov 6, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title:The Art of Writing Clean Code</h4>
          <h4>Subtitle:Why clarity beats cleverness and how to make your future self grateful.</h4>
          <h4>Content/Preview:</h4>
          <p>
            Writing clean code isn’t about following trends or using fancy syntax —
             it’s about creating something that makes sense tomorrow. When you revisit 
             your own project months later, will you thank yourself or get lost in the
              mess? Good code is like a conversation with your future self, and clarity 
              always wins.
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">David</span>
          </div>

          <span className="post-date">Nov 4, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title:Async/Await: A Cleaner Way to Handle JavaScript</h4>
          <h4>Subtitle:Simplifying asynchronous code and reducing promise chaos.</h4>
          <h4>Content/Preview:</h4>
          <p>
            Just discovered the power of async/await in JavaScript. Debugging async code is
            way easier now, and my promise chains are much cleaner.
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Benard</span>
          </div>

          <span className="post-date">Nov 1, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title:Discovering the Power of Serverless</h4>
          <h4>Subtitle:My app now scales automatically-no backend servers,no stress</h4>
          <h4>Content/Preview:</h4>
          <p>
            Exploring serverless functions this week. It’s amazing how much you can accomplish
            without managing a full backend. My small app now scales automatically!
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Lucas Silva</span>
          </div>

          <span className="post-date">Sep 6, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title:Building a Blog with Firebase Authentication</h4>
          <h4>Subtitle:From code to users — the thrill of seeing real people interact with your app.</h4>
          <h4>Content/Preview:</h4>
          <p>
            Just finished building a blog with Firebase authentication. Seeing users sign up 
            and log in for the first time was an incredible feeling!
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Thabo Mokoena</span>
          </div>

          <span className="post-date">Aug 7, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title: Git: Your Developer Superpower </h4>
          <h4>Subtitle: How mastering version control keeps your projects safe and your team efficient.</h4>
          <h4>Content/Preview:</h4>
          <p>
            Learning Git properly has saved my projects more than once. Branching and pull
            requests make teamwork so much smoother.
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Emily Carter</span>
          </div>

          <span className="post-date">Oct 6, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title: CSS Variables: Small Change, Big Impact</h4>
          <h4>Subtitle:Why using variables makes UI design scalable and maintainable.</h4>
          <h4>Content/Preview:</h4>
          <p>
            CSS variables felt unnecessary until I worked on a large-scale UI project. Suddenly, 
            managing colors, spacing, and fonts became effortless. With one variable change, the 
            entire interface adapted. It’s not just cleaner — it’s scalable, flexible, and keeps
            your design system consistent.
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Omar Hassan</span>
          </div>

          <span className="post-date">Nov 2, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title:Getting Started with Tailwind CSS</h4>
          <h4>Subtitle:How utility-first design can transform your styling workflow.</h4>
          <h4>Content/Preview:</h4>
          <p>
            Just explored Tailwind CSS for the first time. It’s strange at first, but the speed
            of styling is unreal once you get used to the classes.
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Noah Patel</span>
          </div>

          <span className="post-date">Nov 6, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title:Debugging Like a Pro</h4>
          <h4>Subtitle:Why reading errors carefully is more valuable than blindly fixing them.</h4>
          <h4>Content/Preview:</h4>
          <p>
            I used to panic when I saw red text in the console. But most of the time, the answer
            was right there in the message. Understanding how to read errors — not just fix them —
            has been one of my biggest growth moments as a developer. Debugging is a skill that pays
            off for life.
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Amara Nkosi</span>
          </div>

          <span className="post-date">Nov 6, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title: The Power of Refactoring</h4>
          <h4>Subtitle: How cleaning up your code can boost performance and maintainability.</h4>
          <h4>Content/Preview:</h4>
          <p>
            It started as a small cleanup but turned into a full refactor. I realized half of
            my code was doing work that didn’t need to be done. By rethinking logic, removing
            duplication, and embracing reusable components, I built a leaner system that was 
            easier to maintain — and faster, too.
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Liam Brown</span>
          </div>

          <span className="post-date">Nov 3, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title: Building Layouts with CSS Grid</h4>
          <h4>Subtitle:How modern CSS transforms page design and layout control.</h4>
          <h4>Content/Preview:</h4>
          <p>
            CSS Grid finally makes layouts fun again. I built a full landing page with no
            frameworks — just pure HTML and CSS!
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Ethan Park</span>
          </div>

          <span className="post-date">Nov 6, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title: Deploying Node.js Apps</h4>
          <h4>Subtitle: Taking your backend from local testing to live production with Render.</h4>
          <h4>Content/Preview:</h4>
          <p>
            Spent the weekend learning how to deploy a Node.js app on Render. It’s so satisfying
            to see your backend live after all those local tests!
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>

        <div className="blog-card">
        <div className="card-header">
          <div className="user-info">
            <div className="user-avatar">👤</div>
            <span className="user-name">Sophia Green</span>
          </div>

          <span className="post-date">Nov 5, 2025</span>
        </div>
        <div className="card-content">
          <h4>Title:First React Project Completed!</h4>
          <h4>Subtitle: How mastering Hooks turns beginners into confident React developers.</h4>
          <h4>Content/Preview:</h4>
          <p>
           Just finished my first React project! Hooks are a total game-changer once you understand
           how useEffect and useState work together. Feeling super proud of the progress!
          </p>
        </div>
        {/* <div className="card-actions">
          <button className="btn-like">Like</button>
          <button className="btn-unlike">Unlike</button>
        </div> */}
      </div>
        

    </div>
  );
}

export default Blogs;

