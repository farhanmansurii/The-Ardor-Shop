import { Button, Input, Spacer, Text, useInput } from '@nextui-org/react';
import React from 'react';
export default function login() {
  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };
  const { value, reset, bindings } = useInput('');
  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: '',
        color: '',
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? 'Correct email' : 'Enter a valid email',
      color: isValid ? 'success' : 'error',
    };
  }, [value]);
  return (
    <div className="w-10/12  mx-auto">
      <div className="mx-auto w-fit  py-5">
        <Text
          h1
          size={50}
          css={{
            textGradient: '45deg, $yellow600 -20%, $red600 100%',
          }}
          weight="bold"
        >
          Login
        </Text>
        <Input
          width="300px"
          clearable
          shadow={true}
          type="email"
          label="Email"
          status={helper.color}
          color={helper.color}
          helperColor={helper.color}
          helperText={helper.text}
          onClearClick={reset}
          placeholder="Enter your e-mail address "
        />
        <Spacer y={1.0} />
        <Input.Password width="300px" clearable helperText="Insecure password" type="password" label="Password" placeholder="Enter your password " />
        <Spacer y={2.0} />
        <Button   css={{
            
            linearGradient: '45deg, $yellow600 -20%, $red600 100%'}} className='mx-auto '>Login</Button>
      </div>
    </div>
  );
}
