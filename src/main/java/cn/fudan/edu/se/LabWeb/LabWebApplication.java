package cn.fudan.edu.se.LabWeb;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@MapperScan("cn.fudan.edu.se.LabWeb.mapper")
public class LabWebApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(LabWebApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(LabWebApplication.class);
	}
}
