import React from "react";
import { Col } from "react-bootstrap";

/**
 * Serve a creare una colonna stile card con bordi arrotandati e un contenuto
 *
 * @param children constuento JSX
 * @returns
 */
export const CardColWrapper = ({ children }: { children: React.ReactNode }) => {
	return <Col className="border rounded-3 bg-white p-0">{children}</Col>;
};
