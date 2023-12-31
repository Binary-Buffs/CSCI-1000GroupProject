export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hello, My name is Austin Lammers! </h1>
          </div>
            <img
              className='pic'
              src='https://i.postimg.cc/Kj6vbzJn/Austin-Lammers-Picture.jpg'
              alt='Austin Lammers'
            />
          <p className='description'>
           Hello, my name is Austin Lammers and I am a Freshman in Computer Science at CU Boulder. I enjoy tennis, video games 
           and overlanding and spend a lot of my free time programming, hanging out with friends, listening to music, and working 
           out. I am originally from Loveland, CO and am now living in Williams Village. I have some background in Computer Science
           and have enjoyed programming as a hobby for quite some time now. Whether it was making command line games, games in Unity,
           or previous coursework, Computer Science is something I have always been interested in and I am excited to expand my
           knowledge here at CU.  
          </p>

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
            background: #18191A;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: white;
            background: #18191A;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
            color: white;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            color: white;
          }

          .pic {
            height: 670px;
            width: 447px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            background: #242526;
          }

          .button:hover,
          .button:focus,
          .button:active {
          
          border-color: #333333;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #18191A;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            background: #18191A;
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}