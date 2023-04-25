const mentorInfo = require('../mentorInfo');

export default function Comment(props){
    let mentor = {};
    let name = '';
    if(props.id){
        mentor = mentorInfo[props.id];
        name = mentor.name;
    }

    return (
        <section class="text-gray-600 body-font overflow-hidden">
        <h2 class="text-black font-bold text-center text-5xl">{name} 멘토님의 한줄평</h2>
        <div class="container px-5 py-24 mx-auto">
            <div class="-my-8 divide-y-2 divide-gray-100">
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font">항상 좋은 멘토링 해주셔서 너무 감사합니다!!</h2>
                    </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font">{name} 멘토님 너무 멋져요!!</h2>
                    </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font">{name} 멘토님 덕분에 정말 좋은 마음가짐을 얻을 수 있었습니다! 항상 동기부여가 되어주셔서 감사합니다 ㅎㅎ</h2>
                    </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font">정말 잘 가르치십니다 ㅎㅎ</h2>
                    </div>
                </div>
                <div class="py-8 flex flex-wrap md:flex-nowrap">
                    <div class="md:flex-grow">
                    <h2 class="text-2xl font-medium text-gray-900 title-font">덕분에 다양한 지식들을 습득할 수 있었습니다!! {name} 멘토님 명강 인정 ㅎㅎ</h2>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}