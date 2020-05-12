// @ts-ignore
import React, {Component} from "react";
import girlfriend from "../static/girlfriend.png";

class QuestionButton extends Component<number, any>{

}

class Game extends Component{
    state = {
        list : [
            {"id":"1", "place":"별 5개 특급 호텔", "price":600000, "reaction":"\"그녀가 오빠 괜찮은거야?\" 말하고 있지만 좋아하는 웃음을 감추지 못하는 게 보인다"},
            {"id":"2", "place":"번화가 부띠끄 호텔", "price":300000, "reaction":"\"우움 여기 인테리어도 좋고 괜찮다.\" 나름 괜찮은 반응이다."},
            {"id":"3", "place":"저렴하지만 겉보기엔 괜찮은 모텔", "price":50000, "reaction":"\"그냥 그렇네.\" 고개를 끄덕였지만 어딘가 석연찮은 반응이다"},
            {"id":"4", "place":"나의 자취방", "price":0, "reaction":"\"남자 혼자 사는 방에 가도 되는 걸까? 좀 부끄러운데..\" 쉬운 여자로 오해하면 어쩌지 고민 하는 것 같다"},
            {"id":"5", "place":"저녁 아무도 없는 사무실", "price":0, "reaction":"\"오빠...이건 좀 아닌 것 같아..\" 꼭 여기여야만 해? 우리 만남 다시 생각해보자"}
        ]
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        let liking = 50;
        return (
            <div className={'outter_box'}>
                <div className={'top_box'}>
                    호감도: {liking}
                </div>
                <div className={'left_box'}>
                    <br/>
                    <img src={girlfriend} className={'girlfriend_picture'} alt="logo" />
                    <br/>
                    {/*<button onClick={() => alert("hello")}>1번</button>*/}
                </div>
                <div className={'right_box'}>
                    {this.state.list.map((value, key) => <div key={key}>{value['place']}</div>)}
                </div>
                <div className={'result_box'}>
                    결과
                </div>
            </div>
        )    }


}


export default Game
