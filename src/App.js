import React, { useState } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import './App.css';

const message = {
  en: {
    heading: 'Welcome to our react application',
    subheading: 'Simple internationalization in action',
  },
  de: {
    heading: 'Willkommen zu unserer Reaktionsanwendung',
    subheading: 'Einfache Internationalisierung in Aktion',
  },
};

function App() {
  const [locale, setLocale] = useState('en');

  const handleChange = (e) => {
    setLocale(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} defaultValue={locale}>
        {['en', 'de'].map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>

      <IntlProvider locale={locale} messages={message[locale]}>
        <p>
          <FormattedMessage id="heading" values={{ locale }} />
          <br />
          <FormattedMessage id="subheading" />
        </p>
      </IntlProvider>
    </>
  );
}

export default App;
