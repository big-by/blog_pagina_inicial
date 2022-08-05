
export const Banner = ({profilePicture, nome, sobreMim}) => {
  return (
    <div class="banner skin__escuro">
        <div class="banner__profile-content">
            <div class="banner__foto">
                <img src={profilePicture} width="200px" alt="Samuel"/>
            </div>
            <div class="banner__texto">
                <h1>{nome}</h1>
                <div class="banner__sobre-mim">{sobreMim}</div>
            </div>
        </div>
    </div>
  );
}