const mentorInfo = require('../mentorInfo');

export default function Tag(props) {
    let mentor = {};
    let skill = [];
    if(props.id){
        mentor = mentorInfo[props.id];
        skill = mentor.skill;
    }

    return (
        <>
            <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                {
                    skill.map((tag, index) => (
                        <button class="bg-gray-100 inline-flex py-1 px-3 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                            <span class="title-font font-medium">{tag}</span>
                        </button>
                    ))
                }
            </div>
        </>
    )
}