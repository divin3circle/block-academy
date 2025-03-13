import { Ionicons } from "@expo/vector-icons";
import React, { useMemo } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

interface CodeBlockProps {
  code: string;
  language?: "python" | "javascript" | "java" | "go";
}

const syntaxRules = {
  javascript: {
    keywords:
      /\b(const|let|var|function|return|if|else|for|while|switch|case|break|class|import|export|from|async|await)\b/g,
    comments: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
  },
  python: {
    keywords:
      /\b(def|class|import|from|return|lambda|if|elif|else|for|while|in|try|except|finally|with|as|and|or|not)\b/g,
    comments: /(#.*$)/gm,
  },
  java: {
    keywords:
      /\b(public|private|protected|class|interface|extends|implements|return|void|static|final|if|else|for|while|switch|case|break|new|this|super)\b/g,
    comments: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
  },
  go: {
    keywords:
      /\b(func|package|import|return|if|else|for|switch|case|break|type|struct|interface|map|range|var|const|go|defer|chan)\b/g,
    comments: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
  },
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "javascript",
}) => {
  const formattedCode = useMemo(() => {
    const rules = syntaxRules[language];
    let highlightedCode = code;

    // Handle comments first to avoid highlighting inside comments
    highlightedCode = highlightedCode.replace(
      rules.comments,
      "[comment]$1[/comment]"
    );

    // Handle strings with escaped quotes
    highlightedCode = highlightedCode.replace(
      /("(?:\\"|\\?[^"])*"|'(?:\\'|\\?[^'])*'|`(?:\\`|\\?[^`])*`)/g,
      "[str]$1[/str]"
    );

    // Handle numbers
    highlightedCode = highlightedCode.replace(
      /(\b\d+(\.\d+)?\b)/g,
      "[num]$1[/num]"
    );

    // Handle keywords
    highlightedCode = highlightedCode.replace(rules.keywords, "[kw]$1[/kw]");

    return highlightedCode;
  }, [code, language]);

  const codeLines = useMemo(() => formattedCode.split("\n"), [formattedCode]);

  return (
    <View style={styles.codeContainer}>
      <View style={styles.header}>
        <Text style={styles.languageTag}>{language}</Text>
        <Ionicons name="code" size={16} color="#f6f7f9" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
        style={styles.scrollContainer}
      >
        <View>
          {codeLines.map((line, lineIndex) => (
            <Text key={`line-${lineIndex}`} style={styles.codeLine}>
              {(
                line.match(
                  /(\[kw\].*?\[\/kw\]|\[str\].*?\[\/str\]|\[num\].*?\[\/num\]|\[comment\].*?\[\/comment\]|[\s\S])/g
                ) || []
              ).map((segment, segmentIndex) => {
                const key = `seg-${lineIndex}-${segmentIndex}`;

                if (segment.startsWith("[kw]")) {
                  return (
                    <Text key={key} style={styles.keyword}>
                      {segment.slice(4, -5)}
                    </Text>
                  );
                }
                if (segment.startsWith("[str]")) {
                  return (
                    <Text key={key} style={styles.string}>
                      {segment.slice(5, -6)}
                    </Text>
                  );
                }
                if (segment.startsWith("[num]")) {
                  return (
                    <Text key={key} style={styles.number}>
                      {segment.slice(5, -6)}
                    </Text>
                  );
                }
                if (segment.startsWith("[comment]")) {
                  return (
                    <Text key={key} style={styles.comment}>
                      {segment.slice(9, -10)}
                    </Text>
                  );
                }
                return <Text key={key}>{segment}</Text>;
              })}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  codeContainer: {
    backgroundColor: "#1e1e1e",
    borderRadius: 8,
    marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  languageTag: {
    fontFamily: "WorkSansSemibold",
    color: "#f6f7f9",
    fontSize: 14,
  },
  scrollContainer: {
    marginTop: 4,
    maxHeight: 300,
    paddingBottom: 14,
  },
  codeLine: {
    fontFamily: "Menlo",
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  keyword: {
    color: "#569CD6",
    fontWeight: "bold",
  },
  string: {
    color: "#CE9178",
  },
  number: {
    color: "#B5CEA8",
  },
  comment: {
    color: "#6A9955",
    fontStyle: "italic",
  },
});

export default CodeBlock;
