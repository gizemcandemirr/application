import { TextInput, Text, View, Button, Image, TouchableOpacity } from "react-native";
import { useForm, useController } from "react-hook-form";
import { useState } from "react";
import cn from "classnames";

import { useLoginUserMutation } from "../hooks/apiSlice";
import Eye from '../components/Icons/Eye'

const Input = ({ name, control, errors, placeholder, type }) => {
  const { field } = useController({ control, name, errors });
  const [showPassword, setShowPassword] = useState(true);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }
  return (
    <View
      className={cn("border-2 py-4 px-8 border-gray-100 mb-4 rounded-xl flex flex-row justify-between ")}
    >
      <TextInput value={field.value} onChangeText={field.onChange} placeholder={placeholder} type={type}
       secureTextEntry={showPassword} className="w-full" />
      {type === "password" && 
      (<TouchableOpacity onPress={toggleShowPassword}>
        <Eye className="w-6 h-6  text-gray-200" />
      </TouchableOpacity>)}

    </View>
  );
};

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loginUser] = useLoginUserMutation();
  const [auth, setAuth] = useState(false);
  const onSubmit = (data) => setAuth(!auth);

  return (
    <View className="bg-white h-full">
      <View className="flex flex-row justify-between mx-4 my-8">
        <View className="flex flex-col">
          {errors.username && (
            <Text className="">* Name is required</Text>
          )}
          {errors.password && (
            <Text className="">* Email is required</Text>
          )}
        </View>
      </View>

      <View className="flex flex-row justify-center items-center">
        <Image source={require('../components/images/login.png')}
          style={{ width: 120, height: 200 }}
        />
      </View>
      <View className="flex flex-row justify-center items-center my-4">
        <Image source={require('../components/images/logo.png')}
          style={{ width: 230, height: 40 }}
        />
      </View>
      <View className="p-3">
        <Input
          {...register("username", { required: true })}
          control={control}
          type="text"
          placeholder="Kullanıcı Adı"
          errors={errors}
        />

        <Input
          {...register("password", { required: true })}
          type="password"
          control={control}
          placeholder="Şifre"
          errors={errors}
        />
        <View className="flex flex-row justify-between">
          <Text></Text>
          <TouchableOpacity >
            <Text className="text-xs pr-4 text-gray-700">Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity className="mt-4 rounded-xl bg-[#0476D9]" style={{
        alignSelf: "center",
        overflow: 'hidden',
      }}>
        <View className="p-4">
          <Text className="text-sm px-24 text-white">Giriş Yap</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

export default Login;
