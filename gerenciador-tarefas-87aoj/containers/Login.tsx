/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image'

export const Login = () => {
    return (
        <div className="container-login">
            <img src="/logo.svg" alt="Logo Fiap" className="logo"/>
            <form>
                <div className="input">
                    <img src="/mail.svg" alt="Logo Fiap"/>
                    <input type="text" placeholder="Login"></input>
                </div>
                <div className="input">
                    <img src="/lock.svg" alt="Informe sua senha"/>
                    <input type="password" placeholder="Senha"></input>
                </div>
                <div>
                    <button> Login </button>
                </div>
            </form>
        </div>
    );
}