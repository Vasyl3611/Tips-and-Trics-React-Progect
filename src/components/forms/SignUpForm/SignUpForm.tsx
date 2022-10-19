import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useSignUp } from '../../../hooks/useSignUp';

import { Input } from '../elements/Input';

import { schema } from './config';
import { ISignUpFormShape } from '../types';

export const SignUpForm: React.FC = () => {
    const signUp = useSignUp();
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (data: ISignUpFormShape) => {
        const { confirmPassword, ...newUser } = data;
        await signUp.mutateAsync(newUser);
        form.reset();
    });

    return (
        <section className = 'publish-tip signup'>
            <form onSubmit = { onSubmit }>
                <fieldset disabled = { signUp.isLoading }>
                    <legend>Залогінитись</legend>
                    <Input
                        label = 'Імя і прізвище'
                        error = { form.formState.errors.name }
                        register = { form.register('name') } />
                    <Input
                        label = 'Електронна пошта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        label = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    <Input
                        label = 'Підтвердження пароля'
                        type = 'password'
                        error = { form.formState.errors.confirmPassword }
                        register = { form.register('confirmPassword') } />
                    <input type = 'submit' value = 'Зареєструватися' />
                </fieldset>
                <p>Перейти до <Link to = '/login'>логіну</Link></p>
            </form>
        </section>
    );
};
