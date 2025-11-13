import './globals.css';

export default function Home() {
  return (
    <div className="conteiner">
      <div className="header">
        <h1> Hello my sunshine
        </h1>
      </div>

      <div className='body'>
        <h2> Seoul </h2>
        <img src="https://images.goway.com/production/hero/iStock-2168171003.jpg?VersionId=H_JlPcdhHz6siyi7Fk6s35wMLvUZvr4s" alt="Soul" className='image' />
        <p> Seoul is capital of South Korea </p>
      </div>

      <div className="info-card">
          <h3>Interesting facts about Seoul</h3>
          <ul>
            <li>Population: over 9 million people</li>
            <li>Founded more than 2,000 years ago</li>
            <li>Home to K-pop and cutting-edge technology</li>
          </ul>
        </div>


      <div className='footer'>
        <h5>Footer</h5>
      </div>

    </div>

  );
}
