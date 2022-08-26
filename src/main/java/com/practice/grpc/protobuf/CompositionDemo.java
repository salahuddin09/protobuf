package com.practice.grpc.protobuf;



import java.util.ArrayList;
import java.util.List;

import com.google.protobuf.Int32Value;
import com.practice.grpc.protobuf.models.Address;
import com.practice.grpc.protobuf.models.Car;
import com.practice.grpc.protobuf.models.Person;

public class CompositionDemo {

    public static void main(String[] args) {

        Address address = Address.newBuilder()
                .setPostbox(123)
                .setStreet("main street")
                .setCity("Atlanta")
                .build();

        Car accord = Car.newBuilder()
                .setMake("Honda")
                .setModel("Accord")
                .setYear(2020)
                .build();

        Car civic = Car.newBuilder()
                .setMake("Honda")
                .setModel("Civic")
                .setYear(2005)
                .build();

        List<Car> cars = new ArrayList<Car>();
        cars.add(accord);
        cars.add(civic);
        
        Person sam = Person.newBuilder()
                .setName("sam")
                .setAge(25)
              //  .setAge(Int32Value.newBuilder().setValue(25).build())
                .addAllCar(cars)
               // .setCar(civic)
                .setAddress(address)
                .build();

        System.out.println(
                sam
        );


    }

}