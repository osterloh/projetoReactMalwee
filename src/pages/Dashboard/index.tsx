import React from "react";
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <Title>Explore repositórios no GitHub</Title>
            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/46034178" alt="Osterloh" />
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam amet obcaecati error enim fuga omnis? Nam, illum. Nemo sequi ex ipsum voluptatum officiis harum porro rem facilis officia animi!</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/46034178" alt="Osterloh" />
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam amet obcaecati error enim fuga omnis? Nam, illum. Nemo sequi ex ipsum voluptatum officiis harum porro rem facilis officia animi!</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/46034178" alt="Osterloh" />
                    <div>
                        <strong>projetoReactMalwee</strong>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam amet obcaecati error enim fuga omnis? Nam, illum. Nemo sequi ex ipsum voluptatum officiis harum porro rem facilis officia animi!</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>
        </>
    );
}

export default Dashboard;