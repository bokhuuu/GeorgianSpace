import i18next from "i18next";
import useLanguageLocalStorage from "./useLanguageLocalStorage";
import gbFlagIcon from "../../public/assets/icons/gbFlagIcon.png";
import geFlagIcon from "../../public/assets/icons/geFlagIcon.png";

const languageList = [
  {
    code: "en",
    flag: gbFlagIcon,
  },
  {
    code: "ge",
    flag: geFlagIcon,
  },
];

const LanguageToggler = () => {
  const { currentLanguage, setCurrentLanguage } = useLanguageLocalStorage();

  const handleLanguageChange = (code: string) => {
    i18next.changeLanguage(code);
    setCurrentLanguage(code);
  };

  return (
    <div className="container d-flex justify-content-end align-items-center">
      <div className="row">
        <div className="col">
          {languageList.map(({ code, flag }) => (
            <button
              key={code}
              className="icon-btn"
              style={{
                backgroundImage: `url(${flag})`,
                borderRadius: "50%",
                backgroundSize: "100% 100%",
                cursor: "pointer",
                opacity: currentLanguage === code ? 0.5 : 1,
              }}
              onClick={() => handleLanguageChange(code)}
              disabled={currentLanguage === code}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageToggler;
