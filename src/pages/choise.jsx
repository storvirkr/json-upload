import React from 'react'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'

export const ChoisePage = () => {


    return (
        <div className={styles.main}>
            <NavLink to="/upload" style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    color: isActive ? "white" : "",
                };
              }} className={styles.variant_1}>
                <section >
            <h1>Вариант 1</h1>
        </section>
            </NavLink>
        <NavLink to="/upload" className={styles.variant_2} style={({ isActive }) => {
                return {
                    textDecoration: "none",
                    color: isActive ? "white" : "",
                };
              }}>
        <section >
            <h1>Вариант 2</h1>
        </section>
            </NavLink>
        </div>
    )
}

