// BackgroundMusicStore.js
import { makeAutoObservable } from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Audio } from 'expo-av';

class BackgroundMusicStore {
    isPlaying = true;
    sound = null; // Здесь храните объект звука

    constructor() {
        makeAutoObservable(this);
        this.loadIsPlaying(); // Загрузить значение при инициализации
    }

    async loadIsPlaying() {
        try {
            const value = await AsyncStorage.getItem('soundIsActive');
            if (value !== null) {
                this.isPlaying = value === 'true';
            } else {
                // Если нет значения в AsyncStorage, установите значение по умолчанию
                await AsyncStorage.setItem('soundIsActive', 'true');
            }
        } catch (error) {
            console.log('Ошибка при загрузке isPlaying: ', error);
        }
    }

/*    async playMusic() {
        this.isPlaying = true;
        await AsyncStorage.setItem('soundIsActive', 'true');

        if (!this.sound) {
            try {
                this.sound = new Audio.Sound();
                await this.sound.loadAsync(
                    require('../../assets/music/baraban-background.mp3')
                );
                await this.sound.playAsync();
                await this.sound.setIsLoopingAsync(true);
            } catch (error) {
                console.error('Ошибка воспроизведения музыки: ', error);
            }
        }
    }*/
    async playMusic() {
        this.isPlaying = true;
        await AsyncStorage.setItem('soundIsActive', 'true');

        try {
            if (!this.sound) {
                this.sound = new Audio.Sound();
                await this.sound.loadAsync(
                    require('../../assets/music/baraban-background.mp3')
                );
            }

            if (this.sound) {
                // Проверяем, загружен ли звук перед попыткой воспроизведения
                const status = await this.sound.getStatusAsync();
                if (status.isLoaded) {
                    await this.sound.playAsync();
                    await this.sound.setIsLoopingAsync(true);
                } else {
                    // Если звук не загружен, не пытаемся его воспроизвести
                    console.log('Звук не загружен');
                }
            }
        } catch (error) {
            console.log('Ошибка воспроизведения музыки: ', error);
        }
    }




    async stopMusic() {
        this.isPlaying = false;
        await AsyncStorage.setItem('soundIsActive', 'false');

        if (this.sound) {
            await this.sound.stopAsync();
            await this.sound.unloadAsync();
            this.sound = null;
        }
    }
}

export default new BackgroundMusicStore();
