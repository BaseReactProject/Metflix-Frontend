import React from 'react'
import { useParams } from 'react-router-dom';
import './updatepasswordpage.css';
import SignIn from '../../components/auth/signin/signin';
import UpdatePassword from '../../components/auth/updatepassword/updatepassword';
type Props = {}

const UpdatePasswordPage = (props: Props) => {
    let { id } = useParams();
    const spans = Array.from({ length: 520 }, (_, index) => index + 1);
    return (
        <>
            <section>
                {spans.map((number) => (
                    <span key={number}></span>
                ))}
                <UpdatePassword fakeId={id}></UpdatePassword>

            </section></>
    )
}

export default UpdatePasswordPage;