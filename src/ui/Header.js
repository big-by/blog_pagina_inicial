export const Header = ({ tabs }) => {
  return (
    <header class="skin__escuro">
      {tabs.map((tab, index)=> 
        <div key={index} class="header__tab">{tab}</div>
      )}
    </header>
  );
}