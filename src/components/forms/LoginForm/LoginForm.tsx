import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import { useLogin } from '../../../hooks';

import { Input } from '../elements/Input';

import { schema } from './config';
import { ILoginFormShape } from '../types';

export const LoginForm: React.FC = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = form.handleSubmit(async (credentials: ILoginFormShape) => {
        await login.mutateAsync(credentials);
        form.reset();
    });

    return (
        <section className = 'publish-tip login'>
            <form onSubmit = { onSubmit }>
                <fieldset onSubmit = { onSubmit }>
                    <legend>Залогінитись</legend>
                    <Input
                        label = 'Електропошта'
                        error = { form.formState.errors.email }
                        register = { form.register('email') } />
                    <Input
                        label = 'Пароль'
                        type = 'password'
                        error = { form.formState.errors.password }
                        register = { form.register('password') } />
                    <input type = 'submit' value = 'Ввійти' />
                </fieldset>
                <p>Якщо у вас досі немає учотної записі, ви можете <Link to = '/signup'>Зареєструватися</Link></p>
            </form>
        </section>
    );
};
