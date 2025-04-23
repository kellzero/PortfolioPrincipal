import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  location: text("location"),
  githubUrl: text("github_url"),
  linkedinUrl: text("linkedin_url"),
  twitterUrl: text("twitter_url"),
  devUrl: text("dev_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Project schema
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageSrc: text("image_src").notNull(),
  githubUrl: text("github_url").notNull(),
  demoUrl: text("demo_url"),
  technologies: text("technologies").array().notNull(),
  categories: text("categories").array().notNull(),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// GitHub repository schema
export const githubRepos = pgTable("github_repos", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  url: text("url").notNull(),
  stars: integer("stars").default(0),
  forks: integer("forks").default(0),
  language: text("language"),
  languages: text("languages").array(),
  updatedAt: text("updated_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact form schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insertion schemas using drizzle-zod
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true,
});

export const insertGithubRepoSchema = createInsertSchema(githubRepos).omit({
  id: true,
  createdAt: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
});

// Infer types from the schemas
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertGithubRepo = z.infer<typeof insertGithubRepoSchema>;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;

export type User = typeof users.$inferSelect;
export type Project = typeof projects.$inferSelect;
export type GithubRepo = typeof githubRepos.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
