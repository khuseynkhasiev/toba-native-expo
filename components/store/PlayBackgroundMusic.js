import { makeAutoObservable } from 'mobx';
class PlayBackgroundMusic{
    play = true
    constructor() {
        makeAutoObservable(this)
    }
    onPlay(){
        this.play = true
    }
    offPlay(){
        this.play = false
    }
}
export default new PlayBackgroundMusic();