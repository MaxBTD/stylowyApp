import './MovieList.css';
import aqua from './img/aquaman.jpg';
import kleks from "./img/kleks.webp";
import matka from "./img/matka.jpg";
import mick from "./img/mickiewicz.jpg";
import wyfr from "./img/wyfrunieci.webp";

const movieInfo = [{img: kleks,title: "AKADEMIA PANA KLEKSA",genre: "familijny / przygodowy / fantasy",times: ["15:30", "18:15"], premiere: true,studyRoom: false,study: false, forKids: false},
                    {img: aqua,title: "AQUAMAN I ZAGINIONE KRÓLESTWO",genre: "science-fiction / akcja / przgodowy",times: ["17:00", "20:00"], premiere: false,studyRoom: false,study: false, forKids: false},
                    {img: matka,title: "MATKA SIEDZI Z TYŁU",genre: "komedia / dramat",times: ["19:00"], premiere: true,studyRoom: true,study: true, forKids: false},
                    {img: mick,title: "PIEP*ZYĆ MICKIEWICZA",genre: "obyczajowy",times: ["20:00"], premiere: true,studyRoom: false,study: false, forKids: false},
                    {img: wyfr,title: "WYFRUNIĘCI / dubbing",genre: "animowany / przygodowy",times: ["16:00","18:00"], premiere: true,studyRoom: false,study: false, forKids: true},
];

function MovieList(){
    const MovieCell = (props) =>{
        return(
            <div className='movieCell'>
                <div className='everythincell'>
                    <img src={props.movieInfo.img} />
                    <div className='titleGenre'>
                        <h3>{props.movieInfo.title}</h3>
                        <p>{props.movieInfo.genre}</p>
                    </div>
                    <div className='cellTags'>
                        {props.movieInfo.studyRoom == true ? <div className='studyRoomCell'>Sala Studyjna</div>: <></>}
                        {props.movieInfo.study == true ? <div className='studyCell'>Studyjny</div>: <></>}
                        {props.movieInfo.forKids == true ? <div className='forKidsCell'>Dla Dzieci</div>: <></>}
                        {props.movieInfo.premiere == true ? <div className='premiereCell'>PREMIERE</div>: <></>}
                        {props.movieInfo.times.map((p) =>
                            <div key={p} className='timeCell'>
                                {p}
                            </div>
                        )}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
    
    return(
        <div>
            {movieInfo.map((p) => <MovieCell movieInfo={p}/>)}
        </div>
    );
}

export default MovieList;