export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />

        <main>
          <div className='underline'>
            <h1 className='title'>Hey, I'm Aleqzander. </h1>
          </div>
          <img
            className='pic'
            src='https://v1.padlet.pics/1/image.webp?t=c_limit%2Cdpr_1%2Ch_945%2Cw_708&url=https%3A%2F%2Fstorage.googleapis.com%2Fpadlet-uploads%2F2141869425%2F9faffee8ee2dba7fc5fcc6e2a295c0f5%2Fcsci1000projpfp.jpg%3FExpires%3D1700721368%26GoogleAccessId%3D778043051564-q79bsd8mc40b0bl82ikkrtc3jdofe4dg%2540developer.gserviceaccount.com%26Signature%3DukiHNNVw7IOJddWF8Ge7rFJFkqTq%252BpYe5J2zDeRrIfpnNtjgbbp03pVcVTFDjRXpR68%252Fz7D1vJocPhBcxfpHgyiaI7fX9%252FiYvGS0N8old39snymaafGICU7QxASQvNrnoz4YAlf%252BRywHoyVVVos%252FH8Ywt8mzZu8rDrfg6RIS9kk%253D%26original-url%3Dhttps%253A%252F%252Fpadlet-uploads.storage.googleapis.com%252F2141869425%252F9faffee8ee2dba7fc5fcc6e2a295c0f5%252Fcsci1000projpfp.jpg'
            alt='aleqzander baker'
          />
          
          <p className='description'>
            Hey everybody, my name's Aleqzander Baker. I have lived in Colorado my entire life and I love hiking, hanging out with friends, 
            playing video games, playing the piano, and coding. I would tell you what I do in my free time, but sadly as a computer science major
            I have no free time. Whenever I find five seconds between homework, tests, and studying, I enjoy feeling connected and anchored to nature.
            I haven't coded much before college, it was more of a recent interest, but I have come to really enjoy it, even if it makes me feel 
            incredibly stressed all the time. 
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
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }

          .pic {
            height: 600px;
            width: 450px;
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
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #fafafa;
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