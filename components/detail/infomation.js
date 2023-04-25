const mentorInfo = require('./mentorInfo');

export default function Infomation(props){
    let mentor = {};
    let name = '';
    let email = '';
    let picture = '';
    let notion = '';
    if(props.id){
        mentor = mentorInfo[props.id];
        name = mentor.name;
        email = mentor.email;
        notion = mentor.notion;
        picture = props.id + '.' + mentor.file;
    }

    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                <div className="flex lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 justify-center">
                    <img src="../images/pentagonImg.png" />
                </div>
                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <div className="w-full h-48 overflow-hidden rounded-xl drop-shadow-lg">
                        <img className="block" src={`../mentor/${picture}`} alt="멘토님 사진" />
                    </div>
                    <h2 className="text-gray-900 text-lg font-medium title-font text-center mt-4">{name} 멘토님</h2>
                    <p className="leading-relaxed text-xl text-center mb-4">
                        {email}
                    </p>
                    <button className="text-white bg-teal-400 border-0 py-2 px-8 focus:outline-none hover:bg-teal-500 rounded text-lg">한줄평 쓰기</button>
                    <br />
                    <button className="text-white bg-teal-400 border-0 py-2 px-8 focus:outline-none hover:bg-teal-500 rounded text-lg">
                    <a href={notion} target='_black'> 노션 보러가기 </a>
                    </button>
                </div>
            </div>
        </section>
    )
}