package com.practice.grpc.protobuf;

import com.practice.grpc.protobuf.models.Credentials;
import com.practice.grpc.protobuf.models.EmailCredentials;
import com.practice.grpc.protobuf.models.PhoneOTP;

public class OneOfDemo {

    public static void main(String[] args) {

        EmailCredentials emailCredentials = EmailCredentials.newBuilder()
                .setEmail("nobody@gmail.com")
                .setPassword("admin123")
                .build();

        PhoneOTP phoneOTP = PhoneOTP.newBuilder()
                .setNumber(1231231234)
                .setCode(456)
                .build();

        Credentials credentials = Credentials.newBuilder()
                .setEmailMode(emailCredentials)
                .setPhoneMode(phoneOTP)
                .build();
        
       // In Real Life you will set only one , 
       // other wise, it will print last one
        
        login(credentials);
        
    }

    private static void login(Credentials credentials){

        switch (credentials.getModeCase()){
            case EMAILMODE:
                System.out.println(credentials.getEmailMode());
                break;
            case PHONEMODE:
                System.out.println(credentials.getPhoneMode());
                break;
        }

    }

}
