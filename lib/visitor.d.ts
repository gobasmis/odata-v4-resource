import { Token, TokenType } from "odata-v4-parser/lib/lexer";
export interface KeyValuePair {
    name: string;
    value: any;
}
export interface NavigationPart {
    name: string;
    type: TokenType;
    key?: KeyValuePair[];
}
export interface ODataResource {
    navigation: NavigationPart[];
    call?: string;
    params?: any;
}
export declare class Visitor {
    navigation: NavigationPart[];
    call: string;
    params: any;
    alias: any;
    path: string;
    singleton: string;
    inlinecount: boolean;
    ast: Token;
    constructor();
    Visit(node: Token, context?: any): ODataResource;
    protected VisitODataUri(node: Token, context: any): void;
    protected VisitQueryOptions(node: Token, context: any): void;
    protected VisitInlineCount(node: Token, context: any): void;
    protected VisitAliasAndValue(node: Token, context: any): void;
    protected VisitResourcePath(node: Token, context: any): void;
    protected VisitSingletonEntity(node: Token, context: any): void;
    protected VisitEntitySetName(node: Token, context: any): void;
    protected VisitCountExpression(node: Token, context: any): void;
    protected VisitCollectionNavigation(node: Token, context: any): void;
    protected VisitCollectionNavigationPath(node: Token, context: any): void;
    protected VisitSimpleKey(node: Token, context: any): void;
    protected VisitCompoundKey(node: Token, context: any): void;
    protected VisitSingleNavigation(node: Token, context: any): void;
    protected VisitPropertyPath(node: Token, context: any): void;
    protected VisitEntityNavigationProperty(node: Token, context: any): void;
    protected VisitEntityCollectionNavigationProperty(node: Token, context: any): void;
    protected VisitValueExpression(node: Token, context: any): void;
    protected VisitRefExpression(node: Token, context: any): void;
    protected VisitBoundOperation(node: Token, context: any): void;
    protected VisitBoundActionCall(node: Token, context: any): void;
    protected VisitBoundFunctionCall(node: Token, context: any): void;
    protected VisitFunctionImportCall(node: Token, context: any): void;
    protected VisitFunctionParameter(node: Token, context: any): void;
    protected VisitActionImportCall(node: Token, context: any): void;
    protected VisitParameterAlias(node: Token, context: any): void;
    protected VisitLiteral(node: Token, context: any): void;
}
