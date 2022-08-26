package com.practice.grpc.protobuf;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.google.protobuf.Int32Value;
import com.practice.grpc.protobuf.models.Address;
import com.practice.grpc.protobuf.models.Car;
import com.practice.grpc.protobuf.models.Person;

public class PersonDemo {

	public static void main(String args[]) throws IOException {
		/*
		 // Builder Demo
		Person person = Person.newBuilder()
				.setName("Test Name")
				.setAge(35)
				.build();
		System.out.println(person.toString());
		
		Person person2 = Person.newBuilder()
				.setName("test Name")
				.setAge(35)
				.build();
		System.out.println(person.toString());
		
		// Equals Method
		System.out.println(person.equals(person2));
		*/
		
	//	Path path = Paths.get("sam.ser");
		
		// Serialize
		// Files.write(path , person.toByteArray());
		
		// Deserialize
		// byte[] bytes = Files.readAllBytes(path);
		// Person newPerson = Person.parseFrom(bytes);
		// System.out.println(newPerson.toString());
		
		Address addressOfSam = Address.newBuilder()
				.setCity("Calgery")
				.setStreet("Woodway")
				.setPostbox(4000)
				.build();
		
		Car accord = Car.newBuilder()
				.setModel("Accord")
				.setMake("Honda")
				.setYear(2017)
				.build();
		
		Car lambargini = Car.newBuilder()
				.setModel("Urus")
				.setMake("Lambergini")
				.setYear(2020)
				.build();
		
		Person sam  = Person.newBuilder()
				.setName("Sam")
				 .setAge(30)
                //.setAge(Int32Value.newBuilder().setValue(25).build())
				.setAddress(addressOfSam)
				.addCar(accord)
				.addCar(lambargini)
				.build();
		System.out.println(sam);
		//System.out.println("Has Age :: "+sam.hasAge());

	}
}
