import { PAGES_TEXTS } from '../../constants/text';
import cl from './LangSelect.module.css';

// type LangSelectProps = {}

export const LangSelect = () => {
  return (
    <select className={cl.select}>
      <option value="ru" className={cl.option}>
        {PAGES_TEXTS.selectLangRu}
      </option>
      <option value="en" className={cl.option}>
        {PAGES_TEXTS.selectLangEn}
      </option>
    </select>
  );
};
